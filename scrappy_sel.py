import time
from bs4 import BeautifulSoup
#selenium 임포트
from selenium import webdriver

#크롬창 열기
driver = webdriver.Chrome('C:/Users/ksw04/OneDrive/바탕 화면/chromedriver.exe')

#교보문고 베스트셀러 주간 사이트 접속하기
url = "https://www.kyobobook.co.kr/bestSellerNew/bestseller.laf"
driver.get(url)

#1번째 페이지 클릭
first_page = driver.find_element_by_css_selector('#main_contents > div:nth-child(6) > div.list_paging > ul > li:nth-child(1)')
first_page.click()

#여러 페이지에서 반복하기
for page in range(1, 11):
    time.sleep(3)

    #html 소스 크롤링
    req = driver.page_source
    soup = BeautifulSoup(req, 'html.parser')

    #제목 변수지정
    book_titles = soup.select('#main_contents > ul > li')
    for i in book_titles:
        titles = i.select_one('div.detail > div.title > a > strong')
        print(titles)

    if page==10:
        break

    #버튼 누르기
    page_buttons = driver.find_elements_by_css_selector('#main_contents > div:nth-child(6) > div.list_paging > ul > *')
    page_buttons[page].click()
    time.sleep(2)

driver.quit()
