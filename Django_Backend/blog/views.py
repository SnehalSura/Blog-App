from rest_framework.viewsets import ModelViewSet
from .models import Blog
from .serializers import BlogSerializer

class BlogViewSet(ModelViewSet):
    """
    A viewset for performing CRUD operations on Blog model.
    """
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
