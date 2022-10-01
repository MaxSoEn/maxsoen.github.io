import pandas as pd
import plotly.express as px

if __name__ == '__main__':
    df=pd.read_csv("temperture.csv")
    YEAR=int(input("please enter year"))
    df_show=df.query(f"year=={YEAR}")
    fig = px.density_mapbox(df_show, lat='Latitude', lon='Longitude',z="AverageTemperature", radius=10,
                        center=dict(lat=0, lon=180), zoom=0,
                        mapbox_style="stamen-terrain",animation_frame="year")
    fig.write_html("index.html")





