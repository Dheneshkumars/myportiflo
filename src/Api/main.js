
export const SendMail = async (emailData) => {
    const response = { message: `Hi ${emailData.name} ! Your Message Has Been Sent`, send: true }
    return response;
}