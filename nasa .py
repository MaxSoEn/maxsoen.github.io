
### importing 
import pandas as pd
import plotly.express as px

##feature 1
df2=pd.read_csv("CO2_Level_in_atmosphere.csv")
df2=df2.dropna()
average_co2=df2.groupby("Year").mean()["Carbon Dioxide (ppm)"].reset_index(name="Average co2")
fig = px.line(average_co2,x="Year", y='Average co2',title='realtion between avverage co2 and year ')
fig.write_html("f1.html")#show()

##feature 2
df3=pd.read_csv("sea_ice.csv")
#df3.head()
#df3=pd.read_csv("sea_ice.csv")
average_co2=df3.groupby("Year").mean(numeric_only = True)['     Extent'].reset_index(name="average extent")
fig = px.line(average_co2,x="Year", y='average extent',title='Average ice extenting')
fig.write_html("f2.html")#.show()




