function checkCard(num) {
    num = num.replace(/\D/g, "");
    const patterns = {
        Visa: /^4\d{12}(\d{3})?$/, // Visa cards start with 4 and have 13 or 16 digits
        Mastercard: /^5[1-5]\d{14}$|^2[2-7]\d{14}$/, // Mastercard starts with 51-55 or 2221-2720 and has 16 digits
        Amex: /^3[47]\d{13}$/, // American Express starts with 34 or 37 and has 15 digits
        Discover: /^6(?:011|5\d{2})\d{12}$/, // Discover cards start with 6011, 65, or other patterns and have 16 digits
        DinersClub: /^3(?:0[0-5]|[68]\d)\d{11}$/, // Diners Club starts with 300-305, 36, or 38 and has 14 digits
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/ // JCB starts with 2131, 1800, or 35xx and has 16 digits
    };
    let type = Object.keys(patterns).find(t => patterns[t].test(num)) || "Unknown";
    return { valid: luhn(num), type };
}

const luhn = n => n.split('').reverse().reduce((s, d, i) => {
    d = parseInt(d);
    return s + (i % 2 ? (d * 2 > 9 ? d * 2 - 9 : d * 2) : d);
}, 0) % 10 === 0;

console.log(checkCard("4111111111111111"));
