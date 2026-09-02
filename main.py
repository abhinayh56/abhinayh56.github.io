# python -m uvicorn main:app --reload

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Numbers(BaseModel):
    num1: float
    num2: float


@app.post("/add")
def add_numbers(numbers: Numbers):
    result = numbers.num1 + numbers.num2

    return {
        "result": result
    }