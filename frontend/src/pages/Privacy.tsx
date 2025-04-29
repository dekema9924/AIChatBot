import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-secondary">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy explains how we collect, use, and protect your information when you use our AI Chatbot Web App ("Service").
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-5 mb-4">
        <li><strong>OAuth Login Data:</strong> When you sign in with third-party services (e.g., Google, GitHub), we may collect your name, email address, profile picture, and a unique provider ID.</li>
        <li><strong>Manual Login:</strong> If you register manually, we collect your username, email, and hashed password.</li>
        <li><strong>Usage Data:</strong> We may collect data on how you interact with the chatbot (e.g., timestamps, usage frequency).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to authenticate users, personalize your experience, maintain security, and improve our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies & Tokens</h2>
      <p className="mb-4">
        We use cookies and JWT (JSON Web Tokens) for authentication and session management. These tokens are stored in HTTP-only cookies and are not accessible via JavaScript.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Storage & Security</h2>
      <p className="mb-4">
        All passwords are stored using industry-standard hashing (e.g., bcrypt). We take reasonable steps to protect your data from unauthorized access.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Third-Party Services</h2>
      <p className="mb-4">
        OAuth providers (such as Google or GitHub) authenticate users but do not receive access to your chatbot interactions or stored passwords.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Data Retention</h2>
      <p className="mb-4">
        We retain user account information until you delete your account or request removal. Anonymous chatbot data may be used for service improvement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Your Rights</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Access the personal data we hold about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Withdraw consent at any time</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact</h2>
      <p className="mb-4">
        If you have questions about this Privacy Policy or wish to make a request, contact us at support@yourdomain.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
