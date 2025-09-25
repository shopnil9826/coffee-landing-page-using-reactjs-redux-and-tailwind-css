import React from "react";
import WhatsAppImg from "../assets/whatsapp.jpg";
import { FloatingWhatsApp } from "react-floating-whatsapp";


function WhatsApp () {
  return (
    <div className="fixed bottom-5 right-5 z-50">
       <FloatingWhatsApp
        phoneNumber="201118721288" 
        accountName="Ahmed Salama"
        chatMessage="How can i help you"
        allowClickAway={true} 
        notification={true} 
        notificationSound={true} 
        avatar={WhatsAppImg}
        statusMessage="i will comeback to you in less than 10 mins!"
        
      />
    </div>
  );
}

export default WhatsApp;
