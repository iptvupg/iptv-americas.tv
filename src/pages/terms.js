import React from 'react';
import Legal from '@site/src/components/landing/Legal';

export default function Terms() {
  return (
    <Legal
      title="Terms of Service"
      description="The terms that govern your use of the IPTV Americas subscription service."
      updated="June 18, 2026"
    >
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
        IPTV Americas subscription service. By purchasing or using the service, you agree to
        these Terms.
      </p>

      <h2>The service</h2>
      <p>
        IPTV Americas provides access to live TV channels and on-demand content delivered
        over the internet. A stable internet connection and a compatible device are required.
        Channel and content availability may change over time.
      </p>

      <h2>Subscriptions and billing</h2>
      <p>
        Subscriptions are billed once for the term you select and do not auto-renew. You are
        responsible for renewing manually before your term ends if you wish to continue.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You agree not to resell, redistribute, or share your credentials, and not to use the
        service for any unlawful purpose. We may suspend or terminate accounts that violate
        these Terms.
      </p>

      <h2>Availability</h2>
      <p>
        We aim for high availability but do not guarantee uninterrupted service. Maintenance,
        third-party outages, or factors outside our control may affect access.
      </p>

      <h2>Disclaimer and limitation of liability</h2>
      <p>
        The service is provided &ldquo;as is&rdquo; without warranties of any kind to the
        extent permitted by law. To the maximum extent permitted by law, our total liability
        is limited to the amount you paid for your current subscription term.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use after changes take effect
        constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>For questions about these Terms, contact our support team.</p>
    </Legal>
  );
}
