#!/usr/bin/env bash

curl -i \
  -H "Content-Type: application/json" \
  -d '{"email":"a@b.c"}' \
  http://localhost:8080/email