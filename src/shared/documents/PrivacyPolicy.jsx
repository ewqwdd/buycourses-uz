import { memo } from 'react';
import { Title } from '../ui/Title';

export default memo(function PrivacyPolicy() {
  return (
    <div className="pb-48 max-w-[1440px] px-10 mx-auto py-8 text-secondary [&_h2]:text-primary [&_h1]:text-primary [&_h3]:text-primary [&_a]:text-accentSecondary">
      <Title title={'Privacy Policy'} />
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      <p className="text-right text-sm text-tertiary">Last update: 13/01/2024</p>

      <section className="mt-6">
        <p>
          At CHULIBAN HOTEL we want you to know how we collect, use, share, and protect information about you. By
          interacting with CHULIBAN HOTEL through our stores, websites, mobile applications, products, and services,
          you consent to the use of information as described in this privacy policy.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Information Collected</h2>
        <ul className="pl-6 list-disc">
          <li>Name</li>
          <li>Mailing address</li>
          <li>E-mail address</li>
          <li>Phone (or mobile) number</li>
          <li>Date of birth or age</li>
          <li>Driver’s license number</li>
          <li>Credit/debit card number</li>
          <li>Purchase/return/exchange information</li>
          <li>Registry or list information</li>
          <li>Your mobile device information</li>
          <li>How you use our sites and mobile applications</li>
          <li>Geo-location and in-store location</li>
          <li>Media Information (Advertising engagement)</li>
          <li>IP Address</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">How is Your Information Collected?</h2>
        <p>We collect information in the following ways:</p>
        <ul className="pl-6 list-disc">
          <li>You provide it to us when you interact with our services.</li>
          <li>We collect information automatically through tracking technologies.</li>
          <li>Third-party automated collection using cookies and other identifiers.</li>
          <li>Social media widgets that may collect your IP and interactions.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">How Is Your Information Used?</h2>
        <p>We use collected information for various purposes, including:</p>
        <ul className="pl-6 list-disc">
          <li>Processing transactions and orders.</li>
          <li>Enhancing customer service and personalization.</li>
          <li>Marketing and advertising purposes.</li>
          <li>Fraud detection and prevention.</li>
          <li>Conducting research and analytics.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">How is Your Information Shared?</h2>
        <p>We share your information with:</p>
        <ul className="pl-6 list-disc">
          <li>CHULIBAN HOTEL subsidiaries and affiliates.</li>
          <li>Service providers for marketing and support services.</li>
          <li>Legal authorities when required by law.</li>
          <li>Third-party advertising platforms.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Choices and Rights</h2>
        <p>You have the right to:</p>
        <ul className="pl-6 list-disc">
          <li>Opt-out of marketing emails and targeted ads.</li>
          <li>Manage your privacy settings.</li>
          <li>Request access or deletion of your personal data.</li>
          <li>Restrict the collection of location and tracking data.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
        <p>We take appropriate measures to protect your personal data, including encryption and secure servers.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Updates to this Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any significant changes will be communicated to users prior to
          implementation.
        </p>
      </section>
    </div>
  );
});
