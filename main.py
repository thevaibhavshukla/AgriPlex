
from flask import Flask, render_template
from provideData import *

# DEFAULT PATH OF THE STATIC FOLDER CAN BE CHANGED BY THIS
# app = Flask(__name__, static_folder = "assets")
# app = Flask(__name__, static_folder = "static")

app = Flask(__name__)

# getAllData()
# print(productsData)
# print(getOneData("11"))


@app.route('/')
def index_html():
	return render_template('index.html', productsData = productsData)

@app.route('/products/<id>')
def products_html(id):
    print(type(id))
    print(getOneData(id))
    
    productData = getOneData(id)
    
    return render_template('products.html', productData = productData)

if __name__ == '__main__':
	app.debug = True
	app.run()
