import React from 'react';
import Legal from '@site/src/components/landing/Legal';

export default function Privacy() {
  return (
    <Legal
      title="Privacy Policy"
      description="How IPTV Americas collects, uses, and protects your personal information."
      updated="June 18, 2026"
    >
      <p>
        IPTV Americas (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
        privacy. This policy explains what information we collect, how we use it, and the
        choices you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Contact details</strong> you provide at checkout, such as your email
          address and messaging handle, used to deliver your login credentials and setup
          guide.
        </li>
        <li>
          <strong>Order information</strong>, such as the plan you selected and payment
          confirmation. Card details are processed by our payment provider; we do not store
          full card numbers on our servers.
        </li>
        <li>
          <strong>Basic technical data</strong>, such as IP address and browser type,
          collected automatically to keep the service secure and reliable.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To activate and deliver your subscription.</li>
        <li>To provide customer and technical support.</li>
        <li>To send service-related messages about your account.</li>
        <li>To detect, prevent, and respond to fraud or abuse.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We share data only with service providers
        who help us operate (for example, payment and messaging providers), and only as
        needed to deliver the service or comply with the law.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep order and contact information for as long as your subscription is active and
        for a reasonable period afterward to meet legal and accounting obligations.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information by
        contacting our support team.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach our support team and we will respond promptly.
      </p>
    </Legal>
  );
}
