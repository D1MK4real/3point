# Generated by Django 4.1.3 on 2022-11-23 21:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('goods', '0003_alter_good_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sizes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('size', models.IntegerField()),
                ('count', models.IntegerField()),
                ('good', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.good')),
            ],
        ),
    ]