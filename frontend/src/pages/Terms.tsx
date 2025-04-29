import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 text-secondary">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <p className="mb-4">
                These Terms of Service ("Terms") govern your use of our AI Chatbot Web App (the "Service"). By using the Service, you agree to these Terms. If you do not agree, do not use the Service.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Service</h2>
            <p className="mb-4">
                You may use the chatbot for lawful and appropriate purposes only. You agree not to misuse, reverse-engineer, or exploit the service in any unauthorized way.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. AI Content Disclaimer</h2>
            <p className="mb-4">
                The AI-generated responses are for informational or entertainment purposes only. They are not guaranteed to be accurate, complete, or appropriate for any particular use case. Use your discretion before acting on any information provided by the chatbot.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Content</h2>
            <p className="mb-4">
                You are solely responsible for any content you input into the chatbot. Do not input sensitive, personal, or confidential information. We do not store or retain user conversations unless explicitly stated.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Prohibited Use</h2>
            <ul className="list-disc pl-5 mb-4">
                <li>Using the chatbot to generate or share harmful, misleading, or offensive content</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Attempting to interfere with the integrity or performance of the service</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Termination</h2>
            <p className="mb-4">
                We may suspend or terminate access to the service at our sole discretion, without prior notice or liability, if you violate these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
            <p className="mb-4">
                We are not liable for any damages resulting from the use or inability to use the AI chatbot, including but not limited to indirect or incidental damages.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to Terms</h2>
            <p className="mb-4">
                We reserve the right to modify these Terms at any time. Updates will be posted here, and continued use of the Service constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact</h2>
            <p>
                For questions about these Terms, please contact us at support@yourdomain.com.
            </p>
        </div>
    );
};

export default TermsOfService;
