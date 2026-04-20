# tests/backend/test_otp_logic.py
import pytest
from backend.auth_logic import generate_otp, is_valid_email, get_message_by_locale

def test_otp_generation():
    # Probamos 100 veces que el código siempre tenga 6 dígitos
    for _ in range(100):
        otp = generate_otp()
        assert len(otp) == 6
        assert otp.isdigit()

def test_email_validation():
    assert is_valid_email("angel@example.com") == True
    assert is_valid_email("correo-falso") == False
    assert is_valid_email("test@dominio") == False # Falta el .com/es

def test_locale_messages():
    assert "Your verification" in get_message_by_locale("en")
    assert "código de verificación" in get_message_by_locale("es")
    # Si pasamos un idioma que no existe (it), debería dar español por defecto
    assert "código de verificación" in get_message_by_locale("it")
