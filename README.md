# Django Real-Time Chat Application

A real-time chat application built with Django and Channels, featuring WebSocket communication for instant messaging.

## Features

- Real-time messaging using WebSocket technology
- User authentication and authorization
- Private chat rooms between users
- Responsive design with mobile support
- Message history
- Clean and intuitive UI
- Secure WebSocket connections

## Tech Stack

- **Backend:**
  - Django 5.1.5
  - Django Channels 4.2.0
  - Daphne 4.1.2
  - SQLite3
  - WhiteNoise for static files

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
  - WebSocket API

## Prerequisites

- Python 3.10 or higher
- pip (Python package manager)
- Virtual environment

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd chat-proj
```

2. Create and activate virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Apply migrations:
```bash
python manage.py migrate
```

5. Create superuser:
```bash
python manage.py createsuperuser
```

6. Collect static files:
```bash
python manage.py collectstatic
```

## Running the Application

1. Start the Daphne server:
```bash
daphne -b 0.0.0.0 -p 8000 chat_project.asgi:application
```

2. Access the application at `http://localhost:8000`

## Project Structure

```
chat-proj/
├── chat/                   # Main application
│   ├── consumers.py       # WebSocket consumers
│   ├── routing.py         # WebSocket URL routing
│   ├── urls.py           # HTTP URL patterns
│   ├── views.py          # View controllers
│   └── templates/        # HTML templates
├── chat_project/          # Project configuration
│   ├── asgi.py          # ASGI configuration
│   ├── settings.py      # Project settings
│   ├── urls.py          # Main URL routing
│   └── wsgi.py          # WSGI configuration
├── static/               # Static files
│   ├── css/             # Stylesheets
│   └── js/              # JavaScript files
├── staticfiles/         # Collected static files
├── media/              # User uploaded files
├── manage.py           # Django CLI
└── requirements.txt    # Project dependencies
```

## Key Components

### Backend Configuration
- ASGI setup for WebSocket support (see `chat_project/asgi.py`)
- Channel layers configuration (see `settings.py`)
- WhiteNoise for static files

### Frontend Structure
- Responsive layout with mobile support
- WebSocket connection handling
- Base template structure

## Security Features

- CSRF protection enabled
- Secure WebSocket connections
- User authentication required for chat
- Input sanitization
- Secure static file serving with WhiteNoise

## Deployment

The application is configured to be deployed on various platforms:
- PythonAnywhere
- Heroku
- DigitalOcean
- Any ASGI-compatible hosting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Django documentation
- Django Channels documentation
- WebSocket protocol specification