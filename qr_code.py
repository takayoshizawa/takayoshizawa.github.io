import qrcode
from PIL import Image

url = "https://takayoshizawa.github.io/"

img = qrcode.make(url)
img.save("qr_code.png")
img = Image.open("qr_code.png")
img.convert("RGB").save("qr_code.pdf")
