from django.shortcuts import render
from .models import Task
from rest_framework import generics
from .serializers import TaskSerializer


class TaskCreate(generics.CreateAPIView):
    # API endpoint that allows creation of a new task
    queryset = (Task.objects.all(),)
    serializer_class = TaskSerializer


class TaskList(generics.ListAPIView):
    # API endpoint that allows task to be viewed.
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskDetail(generics.RetrieveAPIView):
    # API endpoint that returns a single task by pk.
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskUpdate(generics.RetrieveUpdateAPIView):
    # API endpoint that allows a task record to be updated.
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskDelete(generics.RetrieveDestroyAPIView):
    # API endpoint that allows a task record to be deleted.
    queryset = Task.objects.all()
    serializer_class = TaskSerializer