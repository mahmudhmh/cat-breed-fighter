# Cat Clicker App

## Overview

The Cat Clicker App is a simple web application that allows users to interact with a collection of cat images. Users can click on cats to keep track of how many times they have clicked on them. The app fetches cat images from an API and displays them in a user-friendly interface.

## Features

- **Fetch Cat Images:** The app retrieves two columns of cat thumbnails from [The Cat API](https://thecatapi.com/).
- **Two Columns Display:** Each column contains at least 3 cat thumbnails.
- **Main Display Area:** There is a central display space where the main cat (selected cat) is shown.
- **Click Counting:** Clicking on the main display cat increases the click count, which is tracked separately for each column.

## Requirements

1. **API Integration:** Use the [The Cat API](https://thecatapi.com/) to fetch cat images.
2. **Layout:**
   - Two columns of cat thumbnails, each containing at least 3 thumbnails.
   - A main display space either at the top, middle, or bottom of the page.
3. **Click Functionality:**
   - Clicking a cat thumbnail on the left column sets it as the main display cat.
   - Clicking on the main display cat increments the click count for that cat.
