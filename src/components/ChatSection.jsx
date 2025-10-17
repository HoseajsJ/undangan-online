import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ChatSection = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Tamu A', text: 'Selamat ya! Semoga langgeng selalu!', time: '10:30' },
    { id: 2, user: 'Tamu B', text: 'Wah, undangannya keren banget!', time: '10:32' },
    { id: 3, user: 'Keluarga', text: 'Doa terbaik dari kami untuk pengantin!', time: '10:35' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [userName, setUserName] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '' || userName.trim() === '') return;

    const message = {
      id: messages.length + 1,
      user: userName,
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <section id="chat" className="chat-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Buku Tamu & Ucapan</h2>
          <div className="batak-divider"></div>
        </motion.div>
        
        <motion.div 
          className="chat-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="chat-messages">
            <div className="messages-list">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className="message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="message-header">
                    <span className="user">{message.user}</span>
                    <span className="time">{message.time}</span>
                  </div>
                  <div className="message-text">{message.text}</div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <motion.form 
            className="chat-form"
            onSubmit={handleSendMessage}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="form-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="form-group">
                <label htmlFor="userName">Nama Anda</label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="newMessage">Ucapan & Doa</label>
              <textarea
                id="newMessage"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Tulis ucapan atau doa untuk pengantin..."
                rows="3"
                required
              ></textarea>
            </motion.div>
            
            <motion.button 
              type="submit" 
              className="send-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Kirim Ucapan
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatSection;