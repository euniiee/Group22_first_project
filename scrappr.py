from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('http://www.kyobobook.co.kr/bestSellerNew/bestseller.laf')

soup = BeautifulSoup(data.text, 'html.parser')

# <크롤링 필요 목록>
# 이미지
# 제목
# 구매 사이트

#<사이트>
#javascript:_go_targetpage('2')

# <제목 경로>
#main_contents > ul > li:nth-child(6) > div.detail > div.title > a > strong
#main_contents > ul > li:nth-child(18) > div.detail > div.title > a > strong

book_titles = soup.select('#main_contents > ul > li')

for b in book_titles:
    titles = b.select_one('div.detail > div.title > a > strong')
    print(titles)