import * as React from 'react';

interface EmailTemplateProps {
    username: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    username,
    email,
    message,
}) => (
    <div
        style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: 600,
            margin: "auto",
            padding: 20,
            borderRadius: 10,
            border: "1px solid #eee",
            background: "#f9f9f9",
        }}
    >
        <h2 style={{ color: "#333", textAlign: "center" }}>📬 New Outreach from {username}</h2>
        <table style={{ width: "100%", marginTop: 20 }}>
            <tbody>
                <tr>
                    <td style={{ padding: 10, fontWeight: "bold", color: "#555" }}>👤 Name:</td>
                    <td style={{ padding: 10, color: "#333" }}>{username}</td>
                </tr>
                <tr>
                    <td style={{ padding: 10, fontWeight: "bold", color: "#555" }}>📧 Email:</td>
                    <td style={{ padding: 10, color: "#333" }}>{email}</td>
                </tr>
                <tr>
                    <td style={{ padding: 10, fontWeight: "bold", color: "#555" }}>📝 Message:</td>
                    <td style={{ padding: 10, color: "#333", whiteSpace: "pre-line" }}>{message}</td>
                </tr>
            </tbody>
        </table>
    </div>
);