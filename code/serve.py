"""
Use livereload to serve the lecture slides.
"""
from livereload import Server


server = Server()
server.watch("lectures")
server.watch("index.html")
server.serve(root=".", port="8008", host="localhost", open_url_delay=1)
