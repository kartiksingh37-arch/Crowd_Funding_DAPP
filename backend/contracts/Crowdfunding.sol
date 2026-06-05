// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Crowdfunding {
    enum Status {
        Active,
        Cancelled
    }
    struct Campaign {
        uint256 id;
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        Status status;
    }
    uint256 public campaignCount;

    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => address[]) public donators;
    mapping(uint256 => uint256[]) public donations;

    event CampaignCreated(uint256 campaignId, address owner, string title);

    event DonationReceived(uint256 campaignId, address donor, uint256 amount);

    function createCampaign(
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline
    ) public {
        require(_deadline > block.timestamp, "Deadline must be in future");

        uint256 currentId = campaignCount;

        Campaign storage newCampaign = campaigns[currentId];
        newCampaign.status = Status.Active;

        newCampaign.id = currentId;
        newCampaign.owner = msg.sender;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.target = _target;
        newCampaign.deadline = _deadline;
        newCampaign.amountCollected = 0;

        emit CampaignCreated(currentId, msg.sender, _title);

        campaignCount++;
    }

    function donateToCampaign(uint256 _id) public payable {
        Campaign storage campaign = campaigns[_id];
        require(campaign.status == Status.Active, "Campaign cancelled");
        require(block.timestamp < campaign.deadline, "Campaign has ended");

        campaign.amountCollected += msg.value;

        donators[_id].push(msg.sender);

        donations[_id].push(msg.value);

        emit DonationReceived(_id, msg.sender, msg.value);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](campaignCount);

        for (uint256 i = 0; i < campaignCount; i++) {
            allCampaigns[i] = campaigns[i];
        }

        return allCampaigns;
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (donators[_id], donations[_id]);
    }

    function withdrawFunds(uint256 _id) public {
        Campaign storage campaign = campaigns[_id];
        require(campaign.amountCollected > 0, "No funds available");
        require(
            block.timestamp >= campaign.deadline,
            "Campaign is still active"
        );

        require(msg.sender == campaign.owner, "Not the campaign owner");
        uint256 amount = campaign.amountCollected;
        campaign.amountCollected = 0;
        payable(campaign.owner).transfer(amount);
    }

    function cancelCampaign(uint256 _id) public {
        Campaign storage campaign = campaigns[_id];

        require(msg.sender == campaign.owner, "Not campaign owner");

        require(campaign.status == Status.Active, "Already cancelled");

        campaign.status = Status.Cancelled;
    }
}
