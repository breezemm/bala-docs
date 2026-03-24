---
title: Check Transaction Status
sidebar_position: 3
---

import Card from '@site/src/components/Card';
import ApiResponseViewer from '@site/src/components/ApiResponseViewer';

Verify the real-time status of a specific transaction. This endpoint allows merchants to securely query the system to confirm whether a previously initiated payment is successful, pending, or failed.

## Generate Method

<Card
method="POST"
endpoint="{api_endpoint}/merchant/trx/check-status"
description="reference / invoiceNo is required in form-data"
/>

### Response Attributes

| Attribute    | Type   | Details                                                      |
| :----------- | :----- | :----------------------------------------------------------- |
| **status**   | string | Current payment status (e.g. `PENDING`, `SUCCESS`, `FAILED`) |
| **currency** | string | Currency code in ISO 4217 format (e.g. `MMK`)                |
| **method**   | string | Payment method used (e.g. `MMQR`, `MPU`)                     |
| **amount**   | int    | Total payment amount in smallest currency unit               |

<ApiResponseViewer
mode="schema"
schema={{
    data: {
        status: "PENDING",
        currency: "MMK",
        method: "MMQR",
        amount: 1000
       
    },
  }}
/>