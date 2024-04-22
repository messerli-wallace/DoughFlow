from django.urls import path

from app.views import StockDataView, StockFilterView

app_name = "app"

urlpatterns = [
    path('data/', StockDataView.as_view()),
    path('filter/<str:ticker>/start=<str:start_date>_end=<str:end_date>/', StockFilterView.as_view(), name='stock-data'),
]
