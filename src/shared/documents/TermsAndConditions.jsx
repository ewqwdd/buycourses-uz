import { memo } from 'react';
import { Title } from '../ui/Title';

export default memo(function TermsConditions() {
  return (
    <div className="pb-48 max-w-[1440px] px-10 mx-auto py-8 text-secondary [&_h2]:text-primary [&_h1]:text-primary [&_h3]:text-primary [&_a]:text-accentSecondary">
      <Title title={'Terms and Conditions'} />
      <h1 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h1>
      <p className="text-right text-sm text-tertiary">Last update: 13/01/2024</p>

      <section className="mt-6">
        <p>
          The terms “We” / “Us” / “Our”/”Company” individually and collectively refer to CHULIBAN HOTEL and the terms
          “Visitor”/”User” refer to the users. By using this website, you agree to be bound by these Terms and Conditions.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Use of Content</h2>
        <p>
          All logos, brands, marks, names, and content appearing on this site, unless otherwise noted, are properties owned or used
          under license by CHULIBAN HOTEL. You may not modify, distribute, display, reproduce, or use any content for commercial purposes
          without written permission.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Acceptable Website Use</h2>
        <h3 className="text-xl font-semibold mt-4">(A) Security Rules</h3>
        <ul className="pl-6 list-disc">
          <li>Unauthorized access or attempts to breach website security are strictly prohibited.</li>
          <li>Users must not distribute harmful software, including viruses and malware.</li>
          <li>Sending unsolicited promotional material via this website is not allowed.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">(B) General Rules</h3>
        <ul className="pl-6 list-disc">
          <li>Users must not use this website to transmit illegal, offensive, or abusive material.</li>
          <li>Copyrighted or trademarked materials of others cannot be used without permission.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Indemnity</h2>
        <p>
          Users agree to indemnify and hold CHULIBAN HOTEL harmless from any claims, actions, or damages resulting from
          their use of this website or violation of these Terms and Conditions.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Liability</h2>
        <p>
          CHULIBAN HOTEL shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or
          inability to use the website, including loss of data or business interruptions.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Disclaimer of Consequential Damages</h2>
        <p>
          CHULIBAN HOTEL or any associated entities shall not be responsible for any consequential damages, loss of data, or
          technical issues arising from the use of this website.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Refund and Cancellation Policy</h2>
        <h3 className="text-xl font-semibold mt-4">Cancellation Policy</h3>
        <p>
          Customers can request order cancellations within 48 hours of placing an order. Refunds will be processed within 5 business
          days, and funds will be returned to the original payment method. No cancellations are accepted at the time of delivery.
        </p>
        <h3 className="text-xl font-semibold mt-4">Refund Policy</h3>
        <p>
          Customers dissatisfied with a received product can request a refund within 3 working days. Refunds are granted if the
          product does not match the website description or arrives damaged. Warranty-related service will be provided by the
          manufacturing company at their service center.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Service Contact Information</h2>
        <ul className="pl-6 list-disc">
          <li>Email: <a href="mailto:ainulmahammad14@gmail.com">ainulmahammad14@gmail.com</a></li>
          <li>Phone: 9862306075</li>
        </ul>
      </section>

      <section className="mt-8">
        <p>
          By using this website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
        </p>
      </section>
    </div>
  );
});