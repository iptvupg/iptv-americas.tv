import React from 'react';
import Legal from '@site/src/components/landing/Legal';

export default function Refund() {
  return (
    <Legal
      title="Refund Policy"
      description="IPTV Americas 30-day money-back guarantee and refund eligibility."
      updated="June 18, 2026"
    >
      <p>
        We want you to be satisfied with IPTV Americas. This policy explains our money-back
        guarantee and how to request a refund.
      </p>

      <h2>30-day money-back guarantee</h2>
      <p>
        If you are not satisfied with the service, you may request a refund within 30 days of
        your purchase. Approved refunds are issued to your original payment method.
      </p>

      <h2>Eligibility</h2>
      <ul>
        <li>The request must be made within 30 days of the original purchase.</li>
        <li>
          We may ask you to work with our technical support team first so we can attempt to
          resolve any setup or streaming issue.
        </li>
        <li>
          Refunds may be declined in cases of clear abuse, fraud, or violation of our Terms
          of Service.
        </li>
      </ul>

      <h2>How to request a refund</h2>
      <p>
        Contact our support team with your order details. Once approved, refunds are
        typically processed within a few business days, though the time for funds to appear
        depends on your payment provider.
      </p>

      <h2>Contact</h2>
      <p>To start a refund request, reach our support team.</p>
    </Legal>
  );
}
