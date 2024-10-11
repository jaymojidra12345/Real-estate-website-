from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields =  ['title', 'address', 'city', 'description', 'photo_main']
    
class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = "__all__"
        lookup_field = "slug"