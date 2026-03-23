---
title: Welcome
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';
import CtaButtons from '@site/src/components/CtaButtons';

# Welcome to Breeze Payment Gateway

Integrate global payments in minutes. Our API provides a seamless way to accept payments from customers worldwide. Use our unified integration to support different types of payment methods with a single code base.

<CtaButtons/>

---

## 🚀 Getting Started

To begin integrating with the Breeze Payment Gateway, start by understanding our core principles and how to securely authenticate:

- **[Core Concepts](core-concepts)**: Understand the fundamental principles, terminology, and architecture used in our gateway.
- **[Authentication](authentication)**: Detailed guide on how to securely authenticate your requests using API keys.

:::warning Keep Your Keys Secure
Your API keys carry many privileges and provide full access to your account. You can view and manage your API keys in your **Project Settings**. Always keep them safe and do not expose them in client-side repositories!
:::

---

## 💳 Payment Channels

We support multiple payment channels to fit your business operations in Myanmar and beyond. Explore our core endpoint references to start transacting:

- **[MMQR Payments](endpoints/mmqr)**: Learn how to generate and process payments using Myanmar Quick Response (MMQR) codes.
- **[MPU Payments](endpoints/mpu)**: Accept Myanmar Payment Union (MPU) card transactions seamlessly.
- **[Check Status](endpoints/check-status)**: Verify and poll the status of an existing payment session or completed transaction.

---

## ⚡ Making your first request

Trigger a payment session by sending a POST request to the required payment method endpoint (e.g., <Highlight>/api/v1/payment/mmqr</Highlight>). Be sure to include your API key in the `Authorization` request header as described in the Authentication guide.
