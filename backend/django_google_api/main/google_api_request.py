import requests, json
import datetime
import humanfriendly
GOOGLE_API_KEY = 'AIzaSyCJy3OLpMqjjIoWxPzv55oaknZcvVeoyhA'
BASE_COUNTRY = "TW"
# input = [[{"text": "T+T", "lat": 25.0548434, "lng": 121.5507162, "id": "7"}, {"text": "SOMA 特調飲品 永康店", "lat": 25.033182, "lng": 121.530148, "id": "6"}, {"text": "Prozac Balcony", "lat": 25.0161649, "lng": 121.5325259, "id": "5"}, {"text": "Longtail", "lat": 25.0238973, "lng": 121.5483442, "id": "4"}], [{"text": "台北萬豪酒店", "lat": 25.0804515, "lng": 121.5589435, "id": "14"}, {"text": "台北時代寓所-希爾頓啟繽精選酒店", "lat": 25.0440134, "lng": 121.523349, "id": "13"}, {"text": "台北國賓大飯店", "lat": 25.0568205, "lng": 121.5233125, "id": "12"}, {"text": "古莊公園", "lat": 25.0224298, "lng": 121.5273801, "id": "11"}, {"text": "南天書局", "lat": 25.0182287, "lng": 121.5326512, "id": "10"}, {"text": "兄弟大飯店", "lat": 25.0521081, "lng": 121.5446235, "id": "9"}, {"text": "了不起茶飲 (台北師大店)", "lat": 25.0270958, "lng": 121.5249224, "id": "8"}], [{"text": "壹間學校", "lat": 25.034356, "lng": 121.5247802, "id": "16"}], [{"text": "Bar M", "lat": 25.0285696, "lng": 121.5210357, "id": "15"}, {"text": "康樂意小吃店", "lat": 25.0252533, "lng": 121.5178521, "id": "17"}]]
# print(len(input))
# print(len(input[0]))
# print(len(input[1]))
# print(len(input[2]))
# print(len(input[3]))

input = [[{"text": "CoCo 都可(南昌門市)", "lat": 25.0302479, "lng": 121.5166022, "id": "4"}, {"text": "Bar M", "lat": 25.0285696, "lng": 121.5210357, "id": "3"}], [{"text": "JE Kitchen", "lat": 25.038473, "lng": 121.556077, "id": "6"}, {"text": "Impromptu by Paul Lee", "lat": 25.0541183, "lng": 121.5248205, "id": "5"}], [{"text": "MUME", "lat": 25.0363287, "lng": 121.5480527, "id": "8"}, {"text": "MUME", "lat": 25.0363287, "lng": 121.5480527, "id": "7"}]]
def travelTime(places):

    duration_list = []
    for days in range(len(places)):
        to_append = []
        for addresses in range(len(places[days]) - 1):
            lat_a = places[days][addresses]['lat']
            long_a = places[days][addresses]['lng']
            lat_b = places[days][addresses + 1]['lat']
            long_b = places[days][addresses + 1]['lng']

            origin = f'{lat_a},{long_a}'
            destination = f'{lat_b},{long_b}'
            result = requests.get(
                'https://maps.googleapis.com/maps/api/directions/json?',
                params={
                'origin': origin,
                'destination': destination,
                #'waypoints': waypoints,
                'optimizeWaypoints': True,
                'travelMode': 'DRIVING',
                #'modes': ['BUS', 'RAIL'],
                "key": GOOGLE_API_KEY
                })

            directions = result.json()

            if directions["status"] == "OK":
                routes = directions["routes"][0]["legs"]
                distance = 0
                duration = 0
                route_list = []
                for route in range(len(routes)):
                    distance += int(routes[route]["distance"]["value"])
                    duration += int(routes[route]["duration"]["value"])
                    
                    route_step = {
                        'origin': routes[route]["start_address"],
                        'destination': routes[route]["end_address"],
                        'distance': routes[route]["distance"]["text"],
                        'duration': routes[route]["duration"]["text"],
                        'steps': [
                            [
                                s["distance"]["text"],
                                s["duration"]["text"],						
                                s["html_instructions"],
                            ]
                            for s in routes[route]["steps"]]
                    }

                    route_list.append(route_step)
                        
                result = {
                    "origin": origin,
                    "destination": destination,
                    "distance": f"{round(distance/1000, 2)} Km",
                    "duration": humanfriendly.format_timespan(duration),
                    "route": route_list
                    }
                # print(result['duration'])
                # print(days)
                #duration_list[days].append(result['duration'])
                to_append.append(result["duration"])
        duration_list.append(to_append)
        # print(duration_list)
    return json.dumps(duration_list)


print(travelTime(input))
