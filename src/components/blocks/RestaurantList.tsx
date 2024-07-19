import { fetchRestaurants } from "@/api/GlobalAPI";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Restaurant } from "@/lib/data";
import { useEffect, useState } from "react";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filter, setFilter] = useState({
    openNow: false,
    priceTag: "",
    category: "",
  });

  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRestaurants("304554");
        console.log("Fetched Data:", data);
        setRestaurants(data);
        setLoading(false);
      } catch (error: any) {
        console.error("Fetch Error:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleOpenNowFilter = () => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      openNow: !prevFilter.openNow,
    }));
  };

  const handlePriceTagFilter = (priceTag: string) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      priceTag: prevFilter.priceTag === priceTag ? "" : priceTag,
    }));
  };

  const handleCategoryFilter = (category: string) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      category: prevFilter.category === category ? "" : category,
    }));
  };

  const clearFilters = () => {
    setFilter({ openNow: false, priceTag: "", category: "" });
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesOpenNow =
      !filter.openNow || restaurant.currentOpenStatusText === "Open";
    const matchesPriceTag =
      !filter.priceTag || restaurant.priceTag === filter.priceTag;
    const matchesCategory =
      !filter.category ||
      restaurant.establishmentTypeAndCuisineTags.includes(filter.category);

    return matchesOpenNow && matchesPriceTag && matchesCategory;
  });

  const uniqueCategories = Array.from(
    new Set(
      restaurants.flatMap(
        (restaurant) => restaurant.establishmentTypeAndCuisineTags
      )
    )
  );

  const visibleRestaurants = filteredRestaurants.slice(0, visibleCount);

  return (
    <div>
      <h1>Restaurants</h1>

      <div className="mb-4">
        <Button
          onClick={handleOpenNowFilter}
          variant={filter.openNow ? "default" : "outline"}
          className="mr-2"
        >
          Open Now
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="mr-2">
              {filter.priceTag ? filter.priceTag : "Select Price Tag"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Price Tag</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={filter.priceTag}
              onValueChange={handlePriceTagFilter}
            >
              {["$", "$$", "$$$", "$$$$"].map((price) => (
                <DropdownMenuRadioItem key={price} value={price}>
                  {price}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {filter.category ? filter.category : "Select Category"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={filter.category}
              onValueChange={handleCategoryFilter}
            >
              {uniqueCategories.map((category) => (
                <DropdownMenuRadioItem key={category} value={category}>
                  {category}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button onClick={clearFilters} variant="destructive" className="ml-2">
          Clear Filters
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {visibleRestaurants.map((restaurant) => (
          <div key={restaurant.restaurantsId} className="border p-4">
            <img
              src={restaurant.squareImgUrl}
              alt={restaurant.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-xl font-semibold">{restaurant.name}</h2>
            <p>Rating: {restaurant.averageRating}</p>
            <p>{restaurant.currentOpenStatusText}</p>
            <p>
              {restaurant.establishmentTypeAndCuisineTags} -{" "}
              {restaurant.priceTag}
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  onClick={() => setSelectedRestaurant(restaurant)}
                  variant="default"
                >
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{selectedRestaurant?.name}</DialogTitle>
                  <DialogDescription>
                    <img
                      src={selectedRestaurant?.squareImgUrl}
                      alt={selectedRestaurant?.name}
                      className="w-full h-40 object-cover mb-2"
                    />
                    <p>Rating: {selectedRestaurant?.averageRating}</p>
                    <p>{selectedRestaurant?.currentOpenStatusText}</p>
                    <p>
                      {selectedRestaurant?.parentGeoName} -{" "}
                      {selectedRestaurant?.priceTag}
                    </p>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>

      {visibleCount < filteredRestaurants.length && (
        <div className="mt-4 text-center">
          <Button onClick={loadMore} variant="outline">
            LOAD MORE
          </Button>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
