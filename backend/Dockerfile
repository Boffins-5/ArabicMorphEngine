FROM python:3.11-slim

WORKDIR /app

COPY . .

ENV PYTHONPATH=/app

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD ["gunicorn", "arabicMorphEngine.backend.api:app", "-k", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:8000"]