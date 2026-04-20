# backend/auth_logic.py
import random
import re

def generate_otp():
    """Genera un código de 6 dígitos (igual que Math.random en send-otp.ts)"""
    return str(random.randint(100000, 999999))

def is_valid_email(email):
    """Valida el formato del email"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def get_message_by_locale(locale):
    """Simula diccionario de mensajes 'messages' de Astro"""
    messages = {
        "es": "Tu código de verificación es: ",
        "en": "Your verification code is: "
    }
    return messages.get(locale, messages["es"])
