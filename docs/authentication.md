---
title: Authentication
sidebar_position: 3
---

## Authentication & Configuration

Our API provides a seamless way to accept payments from customers worldwide. Use our unified integration to support different types of payment methods with a single code base.

Every project in Breeze Payment Gateway requires configuring three main credentials and URLs to function properly. You can find and configure these in your Project Settings.

### 1. API Access Token
Your API Access Token is the primary method of authenticating your requests. All API requests must include this token in the `Authorization` header as a Bearer token:

```http
Authorization: Bearer <YOUR_API_ACCESS_TOKEN>
```

:::warning Keep Your Token Secure
Your API token carries full access privileges to your project. You can revoke and generate a new token if it is compromised. Never expose it in client-side code or public repositories!
:::

### 2. Callback URL
The Callback URL is the endpoint on your server where the payment gateway will send asynchronous HTTP `POST` notifications (webhooks) when a payment status changes (e.g., successful or failed). This ensures your backend system is updated reliably in real-time.

### 3. Redirect URL
The Redirect URL is the page on your application where customers will be redirected after they finish the payment process. You can use this page to show a success message and order details to the customer.
