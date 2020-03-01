.PHONY: serve

serve:
	xdg-open http://localhost:8899
	python -m http.server 8899
