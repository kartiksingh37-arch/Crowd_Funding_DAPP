# 🚀 Crowdfunding DApp

A decentralized crowdfunding platform built using Solidity, React, Hardhat, Ethers.js, and MetaMask. This application enables users to create fundraising campaigns, receive donations in ETH, track campaign progress, and manage funds transparently through smart contracts deployed on Ethereum.

---

# 📖 Project Overview

Traditional crowdfunding platforms such as Kickstarter and GoFundMe rely on centralized organizations to manage campaigns, donations, and fund distribution.

This project demonstrates how blockchain technology can remove intermediaries by allowing campaign creation, donation management, and fund withdrawals through smart contracts.

Every campaign and donation is recorded on-chain, ensuring transparency, immutability, and trust between campaign owners and contributors.

---

# ScreenSort of the UI and Working
<img width="1920" height="1080" alt="Screenshot 2026-06-05 180731" src="https://github.com/user-attachments/assets/00ac47df-3537-461f-a3ea-b74646a0b16e" />
<img width="1920" height="1080" alt="Screenshot 2026-06-05 180740" src="https://github.com/user-attachments/assets/4a837eee-95d6-4638-a8e4-037af77818d2" />
<img width="1920" height="1080" alt="Screenshot 2026-06-05 181520" src="https://github.com/user-attachments/assets/500c8412-9602-4791-9375-a0725f9ddf7d" />
<img width="1920" height="1080" alt="Screenshot 2026-06-05 181527" src="https://github.com/user-attachments/assets/0f209d7a-ecfb-4fd0-bf70-8fd8e732b73d" />
<img width="1920" height="1080" alt="Screenshot 2026-06-05 181556" src="https://github.com/user-attachments/assets/d341c176-9ce5-4e41-ae5b-2ba98ef284b0" />





# 🎯 Objectives

The goal of this project was to:

* Learn Solidity smart contract development
* Understand smart contract and frontend integration
* Practice MetaMask wallet interactions
* Build a complete Web3 application
* Implement real-world crowdfunding logic
* Gain experience with React and Ethers.js

---

# 🏗 System Architecture

Frontend (React + Tailwind CSS)
│
▼
MetaMask Wallet
│
▼
Ethers.js
│
▼
Crowdfunding Smart Contract
│
▼
Ethereum Blockchain

The frontend communicates with the deployed smart contract through Ethers.js and MetaMask.

All campaign data is stored on-chain.

---

# ⚙️ Core Features

## 1. Wallet Connection

Users connect their MetaMask wallet to interact with the application.

Features:

* Wallet authentication
* Account detection
* Transaction signing
* Ethereum network interaction

---

## 2. Campaign Creation

Users can create crowdfunding campaigns by providing:

* Campaign title
* Campaign description
* Funding target
* Campaign deadline

Each campaign receives a unique ID and is permanently stored on-chain.

---

## 3. Campaign Discovery

All campaigns are displayed on the homepage.

Each campaign card shows:

* Title
* Description
* Funding target
* Amount raised
* Funding percentage
* Campaign status

Campaigns are displayed in a responsive grid layout.

---

## 4. Campaign Details Page

Users can open a dedicated campaign page containing:

* Full campaign information
* Campaign owner
* Funding target
* Amount raised
* Funding progress
* Donation history
* Donator addresses

---

## 5. Donation System

Users can donate ETH directly to campaigns.

Donation process:

1. Connect wallet
2. Select campaign
3. Confirm transaction in MetaMask
4. Donation stored on-chain
5. Campaign balance updates automatically

All donations are transparent and publicly verifiable.

---

## 6. Donator Tracking

Every donation records:

* Donator address
* Donation amount

The application displays a complete donor list for each campaign.

This increases transparency and accountability.

---

## 7. Campaign Withdrawal

Campaign owners can withdraw collected funds.

Security conditions:

* Only campaign owner can withdraw
* Campaign must be completed
* Funds cannot be withdrawn twice

This ensures secure fund management.

---

## 8. Campaign Cancellation

Campaign owners can cancel active campaigns.

Instead of deleting campaigns from the blockchain, campaigns are marked as:

* Active
* Cancelled

This preserves historical data and follows blockchain immutability principles.

Benefits:

* Donation history remains visible
* Campaign history is preserved
* Better auditability

---

# 📜 Smart Contract Design

The smart contract contains a Campaign structure.

Each campaign stores:

* Campaign ID
* Owner Address
* Title
* Description
* Funding Target
* Deadline
* Amount Collected
* Status

The contract uses mappings for efficient storage and retrieval.

Additional mappings track:

* Donators
* Donation amounts

---

# 🔐 Security Considerations

The following security checks were implemented:

### Campaign Creation

* Deadline must be in the future

### Donations

* Campaign must be active
* Campaign must not be expired

### Withdrawals

* Only owner can withdraw
* Funds must exist
* Campaign must be completed

### Cancellation

* Only owner can cancel
* Already cancelled campaigns cannot be cancelled again

These validations help prevent invalid transactions.

---

# 🛠 Technologies Used

## Blockchain

* Solidity
* Ethereum
* Hardhat

## Frontend

* React.js
* React Router
* Tailwind CSS

## Web3

* Ethers.js
* MetaMask

## Development Tools

* VS Code
* Git
* GitHub

---

# 📂 Project Structure

src/

components/

* Navbar.jsx
* Hero.jsx
* CampaignCard.jsx
* CampaignList.jsx
* CreateCampaignModal.jsx

pages/

* Home.jsx
* CampaignDetails.jsx

contract/

* ABI.js
* ContractAddress.js

utils/

* getContract.js

App.jsx

---

# 🧠 Challenges Faced During Development

### MetaMask Network Switching

Initially the application failed to connect correctly because MetaMask was connected to a different network than the deployed contract.

Solution:

* Verified chain IDs
* Added network switching support
* Updated contract deployment process

---

### Smart Contract Redeployment

After modifying the contract structure, existing deployments became incompatible with the frontend ABI.

Solution:

* Recompiled contracts
* Redeployed contracts
* Updated frontend ABI and contract address

---

### Campaign Status Management

Deleting campaigns would permanently remove important information.

Solution:

Implemented a status-based approach:

* Active
* Cancelled

This aligns with blockchain best practices.

---

# 📈 Future Improvements

Planned upgrades:

### IPFS Integration

Store campaign images on IPFS.

### Variable Donation Amounts

Allow users to enter custom donation values.

### Search & Filtering

Search campaigns by title and category.

### Campaign Categories

Examples:

* Education
* Healthcare
* Technology
* Environment

### Dashboard Analytics

Display:

* Total campaigns
* Total ETH raised
* Active campaigns

### User Profiles

Campaign creator profile pages.

### Refund System

Allow donors to claim refunds under certain conditions.

---

# 🎓 Key Learnings

This project helped me understand:

* Solidity Smart Contracts
* Ethereum Transactions
* Ethers.js
* MetaMask Integration
* React State Management
* Smart Contract Security
* Blockchain Architecture
* Decentralized Application Development

---



# 🚀 Conclusion

This project demonstrates the development of a full-stack Web3 application integrating a React frontend with Ethereum smart contracts.

The platform enables decentralized fundraising while maintaining transparency, security, and trust through blockchain technology.

The project serves as a practical implementation of core Web3 concepts including wallet integration, smart contract interactions, state management, and decentralized fund handling.

---

Developed by Kartik Singh
Aspiring Web3 Developer
