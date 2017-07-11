# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Django dependencies
from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

###TEST VIEW
def index(request):
    return HttpResponse("Hello, world. You're at the dashboard, run by the presentation mainframe.")