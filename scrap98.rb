require_relative 'seven_el'
require_relative 'post'
require 'open-uri'
require 'nokogiri'

scheme = 'ulp98'

url = "https://fuelprice.io/brands/7-eleven/?fuel_type=#{scheme}"

html_file = URI.open(url).read
html_doc = Nokogiri::HTML(html_file)


def extract_data_from_matched_string(data)
  SevenEl.new(data[1].gsub(/~ /, ''), data[2], data[3])
end


fuel_info = []
html_doc.search('#nearby-stations').each do |element|
  fuel_info << element.content.scan(/7-Eleven.{10,50}\bago/)
end

fuel_info.flatten!
fuel_info.each do |info|
 if info.match(/(7-Eleven.{2,22})(\d{3}.\d{1,2}).?(\d{1,2} (mins|hour|hours) ago)/)
   extract = info.match(/(7-Eleven.{2,22})(\d{3}.\d{1,2}).?(\d{1,2} (mins|hour|hours) ago)/)
   extract_data_from_matched_string(extract)
 end
end

# sort array by its one value
# display 5
first_10_sorted_fuel = SevenEl.all.sort_by { |price| price.fuel_price }.first(10)
upload_results(first_10_sorted_fuel, scheme)
