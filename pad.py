import pandas as pd
import numpy as np
from surprise import SVD, Dataset, Reader
from surprise.model_selection import cross_validate
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load MovieLens dataset
movies = pd.read_csv("https://files.grouplens.org/datasets/movielens/ml-latest-small/movies.csv")
ratings = pd.read_csv("https://files.grouplens.org/datasets/movielens/ml-latest-small/ratings.csv")

# Prepare data for collaborative filtering
reader = Reader(rating_scale=(0.5, 5.0))
data = Dataset.load_from_df(ratings[['userId', 'movieId', 'rating']], reader)

# Train collaborative filtering model
svd = SVD()
cross_validate(svd, data, cv=5, verbose=True)

# Prepare content-based filtering
tfidf = TfidfVectorizer(stop_words='english')
movies['genres'] = movies['genres'].fillna('')  # Handle missing genres
movie_tfidf_matrix = tfidf.fit_transform(movies['genres'])

# Compute similarity between movies
cosine_sim = cosine_similarity(movie_tfidf_matrix, movie_tfidf_matrix)

# Function to get movie recommendations based on similarity
def recommend_movies(movie_title, num_recommendations=5):
    idx = movies[movies['title'] == movie_title].index[0]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)[1:num_recommendations+1]
    movie_indices = [i[0] for i in sim_scores]
    return movies.iloc[movie_indices][['title', 'genres']]

# Example usage
print(recommend_movies("Toy Story (1995)"))
