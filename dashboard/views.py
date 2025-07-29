from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.models import User
from django.contrib import messages


def index(request):
    return render(request, 'dashboard/auth.html')

def dashboard_view(request):
    return render(request, 'dashboard/dashboard.html')

def auth_view(request):
    if request.method == 'POST':
        action = request.POST.get('action')
        username = request.POST.get('nickname_input')
        password = request.POST.get('password_input')

        if action == 'login':
            user = authenticate(request, username=username, password=password)
            if user is not None:
                auth_login(request, user)
                return redirect('dashboard')
            else:
                messages.error(request, 'Неправильный логин или пароль')

        elif action == 'register':
            password_repeat = request.POST.get('password_input_repeat')
            if password != password_repeat:
                messages.error(request, 'Пароли не совпадают')
            elif User.objects.filter(username=username).exists():
                messages.error(request, 'Пользователь с таким ником уже существует')
            else:
                user = User.objects.create_user(username=username, password=password)
                auth_login(request, user)
                return redirect('dashboard')
    
    return render(request, 'dashboard/auth.html')