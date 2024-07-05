import pandas as pd, numpy as np

csvfile = "500_Cities__Current_asthma_among_adults_aged___18_years_20240627.csv"
cities_file = pd.read_csv(csvfile)

cities_file['PopulationCount'] = pd.to_numeric(cities_file['PopulationCount'], errors='coerce')
cities_file['Data_Value'] = pd.to_numeric(cities_file['Data_Value'], errors='coerce')
cities_file['High_Confidence_Limit'] = pd.to_numeric(cities_file['High_Confidence_Limit'], errors='coerce')
cities_file['Low_Confidence_Limit'] = pd.to_numeric(cities_file['Low_Confidence_Limit'], errors='coerce')

High_Confidence_Diff = cities_file['High_Confidence_Limit'] - cities_file['Data_Value']

cities_file['Proportional_Error'] = 2 * np.sqrt((cities_file['Data_Value'] * (1 - cities_file['Data_Value'])) / cities_file['PopulationCount'])

print(cities_file[['Data_Value', 'High_Confidence_Limit', 'Proportional_Error']].head())