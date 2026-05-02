import { db } from "./lib/firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// 1. استلم الفورم من الـ HTML (تأكد إن الـ ID بتاع الفورم عندك 'contact-form')
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // يمنع الصفحة إنها تعمل Refresh

        // 2. اسحب البيانات من الخانات
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        try {
            // 3. ابعت البيانات لـ Firebase
            await addDoc(collection(db, "contacts"), {
                name: name,
                email: email,
                message: message,
                timestamp: serverTimestamp()
            });

            alert("تم إرسال رسالتك لـ AxonFlow بنجاح! 🚀");
            contactForm.reset(); // فضي الخانات بعد الإرسال
        } catch (error) {
            console.error("Error:", error);
            alert("حصل مشكلة، جرب تاني.");
        }
    });
}