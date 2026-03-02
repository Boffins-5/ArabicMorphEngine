FROM python:3.11-slim

WORKDIR /app

COPY . /app

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD ["gunicorn", "api:app", "-k", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:8000"]