// Test script to check if enquiry API is working
const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "9876543210",
    date: "2025-12-25",
    guests: 4,
    message: "Test message",
    boatName: "Royal 2 Bedroom Premium"
};

fetch('http://localhost:5000/api/bookings', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(testData)
})
.then(res => res.json())
.then(data => {
    console.log('✅ Success:', data);
})
.catch(err => {
    console.error('❌ Error:', err.message);
});
