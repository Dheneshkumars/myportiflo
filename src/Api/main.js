export const SendMail = async (emailData) => {
    try {
        const response = await fetch("https://formsubmit.co/ajax/dheneshkumar111@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: emailData.name,
                email: emailData.email,
                message: emailData.message,
                _subject: `Portfolio contact from ${emailData.name}`,
                _captcha: "false"
            })
        });

        const resultText = await response.text();
        let result;
        try {
            result = JSON.parse(resultText);
        } catch (parseError) {
            console.warn('SendMail response parse failed, raw text:', resultText);
            result = { send: response.ok, message: response.ok ? 'Message sent successfully.' : 'Unable to send message right now.' };
        }

        if (!response.ok) {
            return { send: false, message: result?.message || 'Unable to send message right now.' };
        }

        return result;
    } catch (error) {
        console.error('SendMail error:', error);
        return { send: false, message: 'Unable to send message right now.' };
    }
}
