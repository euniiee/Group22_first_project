from pymongo import MongoClient

from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

client = MongoClient('mongodb+srv://team22:1234@cluster0.xfhpt.mongodb.net/cluster0?retryWrites=true&w=majority')
db = client.team22db


# 비회원 HTML 화면 보여주기
@app.route('/')
def home():
    return render_template('index.html')


# API 역할을 하는 부분
# 홈페이지(베스트셀러 주간)
@app.route('/api/weekly', methods=['GET'])
def bestWeekly():
    sample_receive = request.args.get('sample_give')
    print(sample_receive)
    return jsonify({'msg': 'list 연결되었습니다!'})
#
# @app.route('/api/monthly', methods=['GET'])
# def show_stars():
#     sample_receive = request.args.get('sample_give')
#     print(sample_receive)
#     return jsonify({'msg': 'list 연결되었습니다!'})
#
# @app.route('/api/yearly', methods=['GET'])
# def show_stars():
#     sample_receive = request.args.get('sample_give')
#     print(sample_receive)
#     return jsonify({'msg': 'list 연결되었습니다!'})
#
# @app.route('/api/steady', methods=['GET'])
# def show_stars():
#     sample_receive = request.args.get('sample_give')
#     print(sample_receive)
#     return jsonify({'msg': 'list 연결되었습니다!'})
#
# @app.route('/api/detail', methods=['GET'])
# def show_stars():
#     sample_receive = request.args.get('sample_give')
#     print(sample_receive)
#     return jsonify({'msg': 'list 연결되었습니다!'})
#
# @app.route('/api/favorite', methods=['GET'])
# def show_stars():
#     sample_receive = request.args.get('sample_give')
#     print(sample_receive)
#     return jsonify({'msg': 'list 연결되었습니다!'})
#
# @app.route('/api/signin', methods=['POST'])
# def like_star():
#     sample_receive = request.form['sample_give']
#     print(sample_receive)
#     return jsonify({'msg': 'like 연결되었습니다!'})
#
#
# @app.route('/api/signup', methods=['POST'])
# def like_star():
#     sample_receive = request.form['sample_give']
#     print(sample_receive)
#     return jsonify({'msg': 'like 연결되었습니다!'})
#
# @app.route('/api/heart', methods=['POST'])
# def like_star():
#     sample_receive = request.form['sample_give']
#     print(sample_receive)
#     return jsonify({'msg': 'like 연결되었습니다!'})
#
# @app.route('/api/break', methods=['POST'])
# def like_star():
#     sample_receive = request.form['sample_give']
#     print(sample_receive)
#     return jsonify({'msg': 'like 연결되었습니다!'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)