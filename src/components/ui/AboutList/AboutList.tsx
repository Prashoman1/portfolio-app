"use client";
import { useState } from "react";
import { Input } from "../../shared/Input";
import { Textarea } from "../../shared/TextArea";

const AboutList = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    subtitle: "",
    description: "",
    socials: [{ name: "", url: "" }],
  });

  return (
    <>
      <div className="px-5 py-10">
        <h1>About List</h1>
        <form
          // onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input
            name="title"
            placeholder="Title"
            value={formData.title}
            onchange={(e: any) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className=""
          />
          <Input
            name="subtitle"
            placeholder="Subtitle"
            value={formData.subtitle}
            onchange={(e: any) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
            className=""
          />
          <Input
            name="image"
            type="file"
            placeholder="Image"
            
            value={formData.title}
            onchange={(e: any) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className=""
          />
          <Textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onchange={(e: any) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className=""
          />

          <div className="space-y-2">
            <label htmlFor="socialLinks" className="block text-sm font-medium">
              Social Links
            </label>
            {formData.socials.map((social, index) => (
              <div key={index} className="flex space-x-2">
                <Input
                  id={`socialName${index}`}
                  name="name"
                  placeholder="Platform"
                  value={social.name}
                  onchange={(e: any) => {
                    setFormData({
                      ...formData,
                      socials: formData.socials.map((s, i) =>
                        i === index ? { ...s, name: e.target.value } : s
                      ),
                    });
                  }}
                  className=""
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AboutList;
