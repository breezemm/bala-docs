---
title: Check Transaction Status
sidebar_position: 3
---

import Card from '@site/src/components/Card';

Retrieve comprehensive metadata and operational status for a specific project within your workspace. This endpoint provides deep visibility into creation timelines, owner details, and environment configurations.

### Generate Method

<Card
method="POST"
endpoint="{api_endpoint}/merchant/trx/check-status"
description="Response a data object"
/>

## Response Attributes

| Attribute    | Type   | Details                                                      |
| :----------- | :----- | :----------------------------------------------------------- |
| **status**   | string | Current payment status (e.g. `PENDING`, `SUCCESS`, `FAILED`) |
| **currency** | string | Currency code in ISO 4217 format (e.g. `MMK`)                |
| **method**   | string | Payment method used (e.g. `MMQR`, `MPU`)                     |
| **amount**   | int    | Total payment amount in smallest currency unit               |
