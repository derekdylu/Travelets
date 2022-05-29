import requests, json
import datetime
import humanfriendly
GOOGLE_API_KEY = 'AIzaSyCJy3OLpMqjjIoWxPzv55oaknZcvVeoyhA'
BASE_COUNTRY = "TW"

def TravelTime(places):
    # lat_a = kwargs.get("lat_a")
	# long_a = kwargs.get("long_a")
	# lat_b = kwargs.get("lat_b")
	# long_b = kwargs.get("long_b")
	# lat_c = kwargs.get("lat_c")
	# long_c = kwargs.get("long_c")
	# lat_d = kwargs.get("lat_d")
	# long_d = kwargs.get("long_d")
    lat_a=25.0583597
    long_a=121.5332301
    lat_b=25.0760766
    long_b=121.5754364
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
                
        to_print = {
            "origin": origin,
            "destination": destination,
            "distance": f"{round(distance/1000, 2)} Km",
            "duration": humanfriendly.format_timespan(duration),
            "route": route_list
            }
        print(to_print)

    # duration_list = []
    # for key in len(places) - 1:
    #     places[key]
    #     places[key + 1]

    #     origin = f'{lat_a},{long_a}'
    #     destination = f'{lat_b},{long_b}'
    #     result = requests.get(
    #         'https://maps.googleapis.com/maps/api/directions/json?',
    #         params={
    #         'origin': origin,
    #         'destination': destination,
    #         #'waypoints': waypoints,
    #         'optimizeWaypoints': True,
    #         'travelMode': 'DRIVING',
    #         #'modes': ['BUS', 'RAIL'],
    #         "key": GOOGLE_API_KEY
    #         })

    #     directions = result.json()

    #     if directions["status"] == "OK":
    #         routes = directions["routes"][0]["legs"]
    #         distance = 0
    #         duration = 0
    #         route_list = []
    #         for route in range(len(routes)):
    #             distance += int(routes[route]["distance"]["value"])
    #             duration += int(routes[route]["duration"]["value"])
                
    #             route_step = {
    #                 'origin': routes[route]["start_address"],
    #                 'destination': routes[route]["end_address"],
    #                 'distance': routes[route]["distance"]["text"],
    #                 'duration': routes[route]["duration"]["text"],
    #                 'steps': [
    #                     [
    #                         s["distance"]["text"],
    #                         s["duration"]["text"],						
    #                         s["html_instructions"],
    #                     ]
    #                     for s in routes[route]["steps"]]
    #             }

    #             route_list.append(route_step)
                    
    #         result = {
    #             "origin": origin,
    #             "destination": destination,
    #             "distance": f"{round(distance/1000, 2)} Km",
    #             "duration": humanfriendly.format_timespan(duration),
    #             "route": route_list
    #             }
    #         duration_list.append(result.duration)