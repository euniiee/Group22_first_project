import time
from bs4 import BeautifulSoup
#selenium 임포트
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
import requests

from pymongo import MongoClient
client = MongoClient('mongodb+srv://team22:1234@cluster0.xfhpt.mongodb.net/cluster0?retryWrites=true&w=majority')
db = client.team22db

# <크롤링 필요 목록>
# 이미지
# 제목
# 구매 사이트

#크롬창 열기
driver = webdriver.Chrome('C:/users/HANSUNG/desktop/chromedriver.exe')

#교보문고 베스트셀러 주간 사이트 접속하기
url = "https://www.kyobobook.co.kr/bestSellerNew/bestseller.laf?range=1&kind=3&orderClick=DAC&mallGb=KOR&linkClass=A"
driver.get(url)

#1번째 페이지 클릭
first_page = driver.find_element_by_css_selector('#main_contents > div:nth-child(6) > div.list_paging > ul > li:nth-child(1)')
first_page.click()
time.sleep(3)

#여러 페이지에서 반복하기
for page in range(10):
    time.sleep(2)
    # 버튼 누르기
    try:
        page_buttons = driver.find_elements_by_css_selector('#main_contents > div:nth-child(6) > div.list_paging > ul > *')

        page_buttons[page].click()
        time.sleep(2)
    except NoSuchElementException:
        break

    #html 소스 크롤링
    req = driver.page_source
    soup = BeautifulSoup(req, 'html.parser')

    #제목, 이미지url 추출
    books_weekly = soup.select('#main_contents > ul > li')
    for i in books_weekly:
        title = i.select_one('div.cover > a > img')['alt']
        imgsrc = i.select_one('div.cover > a > img')['src']
        buy_link = i.select_one('div.detail > div.title > a')['href']
        print(title, imgsrc, buy_link)

        #db에 저장
        doc = {
            "title" : title,
            "imgsrc" : imgsrc,
            "buy_link" : buy_link
        }
        db.yearly.insert_one(doc)

driver.quit()


